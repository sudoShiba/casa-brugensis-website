# Turns the Airbnb iCal feed (ICAL_URL) into availability.json.
# Only the booked date ranges are written, no guest details.
import json
import os
import re
import sys
import urllib.request
from datetime import date, datetime, timezone

url = os.environ.get("ICAL_URL")
# without data the site just hides the calendar, so never fail the deploy
if not url:
    print("ICAL_URL is not set, skipping calendar")
    sys.exit(0)

try:
    with urllib.request.urlopen(url, timeout=30) as resp:
        ics = resp.read().decode("utf-8")
except Exception as e:
    print(f"Could not fetch calendar: {e}")
    sys.exit(0)

def parse(value):
    return date(int(value[0:4]), int(value[4:6]), int(value[6:8])).isoformat()

booked = []
for event in re.findall(r"BEGIN:VEVENT(.*?)END:VEVENT", ics, re.S):
    start = re.search(r"^DTSTART[^:]*:(\d{8})", event, re.M)
    end = re.search(r"^DTEND[^:]*:(\d{8})", event, re.M)
    if start and end:
        # end is the checkout day, so it is not a booked night
        booked.append([parse(start.group(1)), parse(end.group(1))])

booked.sort()
out = {"updated": datetime.now(timezone.utc).isoformat(timespec="minutes"), "booked": booked}
with open(sys.argv[1] if len(sys.argv) > 1 else "availability.json", "w") as f:
    json.dump(out, f)
print(f"{len(booked)} booked ranges")
