INSERT INTO "account_type"
    ("title")
VALUES
    ('administrator'),
    ('volunteer');

INSERT INTO "users"
    ("username", "first_name", "last_name", "password", "account_type_id", "email", "telephone")
VALUES
    ('admin', 'Admin', 'Test', '1234', 1, 'admin@gmail.com', '816-555-5551'),
    ('jsmith', 'Jane', 'Smith', '1234', 2, 'janesmith@gmail.com', '913-555-5551'),
    ('adamM', 'Adam', 'Martin', '1234', 2, 'johndoe@gmail.com', '555-666-5651'),
    ('bekahN', 'Bekah', 'Nord', '1234', 2, 'bekah@gmail.com', '310-666-5651'),
    ('carlio', 'Carly', 'Olson', '1234', 2, 'carly@gmail.com', '555-666-5651'),
    ('dnaPolo', 'Dana', 'Pollock', '1234', 2, 'dana@gmail.com', '616-686-5651');

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

INSERT INTO "learning_material"
    ("program_id", "title", "content")
VALUES
    (1, 'JA Be Entrepreneurial Program Brief', 'https://jausa.ja.org/dA/46b7973183/file/JA%20Be%20Entrepreneurial%20Program%20Brief.pdf'),
    (1, 'JA Be Entrepreneurial Program Overview', 'https://jausa.ja.org/dA/625763a0dc/file/JA%20Be%20Entrepreneurial%20Program%20Overview.pdf'),
    (2, 'JA Biztown Program Brief', 'https://jausa.ja.org/dA/598cf31835/file/JA%20BizTown%20Program%20Brief.pdf'),
    (2, 'JA Biztown Program Overview', 'https://jausa.ja.org/dA/0f7568aa27/file/JA%20BizTown%20Program%20Overview.pdf'),
    (6, 'JA Career Success Program Brief', 'https://jausa.ja.org/dA/934b62a195/file/JA%20Career%20Success%20Program%20Brief.pdf'),
    (6, 'JA Career Success Program Overview', 'https://jausa.ja.org/dA/ae66cd4e82/file/JA%20Career%20Success%20Program%20Overview.pdf'),
    (7, 'JA Company Program Blended Program Overview', 'https://jausa.ja.org/dA/c9eddc2fe7/file/JA%20Company%20Program%20Blended%20Program%20Overview.pdf'),
    (8, 'JA Economics Blended Model', 'https://jausa.ja.org/dA/a5f5d91e81/file/JA%20Economics%20Course%20Overview%20and%20Outline.pdf');

INSERT INTO "scheduled_classes"
    ("user_id", "program_id", "school_id")
VALUES
    (1, 2, 3),
    (2, 3, 3),
    (3, 2, 3),
    (4, 2, 2),
    (1, 1, 1);
INSERT INTO "images"
    ("user_id", "program_id", "scheduled_class_id", "image_url")
VALUES
    (1, 1, 1, 'https://picsum.photos/200/300');


INSERT INTO "images"
    ("user_id", "program_id", "scheduled_class_id", "image_url")
VALUES
    (1, 1, 1, 'https://picsum.photos/200/300');
