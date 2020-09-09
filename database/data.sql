-- This must be run before any other query!
INSERT INTO "account_type"
    ("title")
VALUES
    ('administrator'),
    ('volunteer');

INSERT INTO "schools"
    ("name", "address", "city", "state", "zip")
VALUES
    ('Truman High School', '3301 South Noland Road', 'Independence', 'Missouri', 64055),
    ('North Kansas City High School', '620 East 23rd Ave', 'North Kansas City', 'Missouri', 64116),
    ('Winnetonka High School', '5815 NE 48th Street', 'Kansas City', 'Missouri', 64119),
    ('Oak Park High School', '825 NE 79th Terrace', 'Kansas City', 'Missouri', 64118);

INSERT INTO "programs"
    ("title", "image", "sessions")
VALUES
    ('JA Be Entrepreneurial', 'imageURL', 7),
    ('JA BizTown', 'imageURL', 14),
    ('JA Business Communications', 'imageURL', 16),
    ('JA Career Exploration Fair', 'imageURL', 3),
    ('JA Career Speakers Series', 'imageURL', 4),
    ('JA Career Success', 'imageURL', 7),
    ('JA Company Program', 'imageURL', 13),
    ('JA Economics Blended Model', 'imageURL', 16);