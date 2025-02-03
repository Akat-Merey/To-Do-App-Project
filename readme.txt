Author: Akat Merey and Toktarkanov Rakhat

About the project:
    It is a to do app project, where you can add any task to the website. The tasks will be displayed based on the date of upload and your current time(past, today, future). 
    It also got filter options based on the category of the task, which can be chosen in "Create a task" page
    Also, you can press the checkbox of any task to mark it as "done". "Done" tasks are displayed in the right side of the website. 
    Also you can delete the tasks (totally delete from the database)



Used technics/methods/tools:
    - database as Mongodb and implementation of it with mongoose
    - express and node.js
    - Restfull API (Post, Delete, Get, Patch methods)
    - asynchronous programming
    - error responses
    - RESTful API structure with MVC principles


How to launch the project:
    Database:
        Create a collection with name "to-do-app" with MongoCompass 

    To launch the server:
        Terminal:
            npm i
            nodemon index.js
        On Chrome:
            http://localhost:8000/to-do-app


    Actually, the sample is non suitable for this case, since the sort of the tasks is done based on their uploade date and current time of user. So, all the tasks from this sample will be on past section. 
    Sample data for database in postman; Method POST, http://localhost:8000/to-do-app/addMany 
    [
        {
            "_id": "676061cd2c0f5897c5b2af17",
            "title": "Buy groceries",
            "details": "Milk: 1L, Egg: 10",
            "date": "2025-02-03T18:00:00.000Z",
            "status": false,
            "category": "Daily",
            "__v": 0
        },
        {
            "_id": "676061f12c0f5897c5b2af19",
            "title": "Swimming",
            "details": "Barys arena",
            "date": "2025-02-04T11:00:00.000Z",
            "status": false,
            "category": "Sport",
            "__v": 0
        },
        {
            "_id": "6760620e2c0f5897c5b2af1b",
            "title": "Group project",
            "details": "Mongodb",
            "date": "2025-02-02T10:00:00.000Z",
            "status": false,
            "category": "Study",
            "__v": 0
        },
        {
            "_id": "6760623b2c0f5897c5b2af1d",
            "title": "Final",
            "details": "Math2",
            "date": "2025-02-03T12:00:00.000Z",
            "status": false,
            "category": "Study",
            "__v": 0
        },
        {
            "_id": "676062612c0f5897c5b2af1f",
            "title": "Clean kitchen",
            "details": "Wash washing machine",
            "date": "2025-02-04T14:00:00.000Z",
            "status": false,
            "category": "Daily",
            "__v": 0
        },
        {
            "_id": "6760628f2c0f5897c5b2af21",
            "title": "Buy D3",
            "details": "Salamat apteka",
            "date": "2025-02-02T14:00:00.000Z",
            "status": false,
            "category": "Health",
            "__v": 0
        }
    ]
