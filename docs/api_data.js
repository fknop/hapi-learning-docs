define({ "api": [
  {
    "type": "get",
    "url": "/courses/:id",
    "title": "Get one course",
    "name": "GetCourse",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses/XYZ",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the course (code).</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The course object.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:id/documents/:path",
    "title": "Get a course documents",
    "name": "GetCourseDocuments",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses/XYZ/documents/folder1/folder2/doc",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the course (code).</p> "
          },
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "path",
            "defaultValue": "/",
            "description": "<p>The documents path.</p> "
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "hidden",
            "defaultValue": "false",
            "description": "<p>True to see hidden files.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Stream</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The files to download.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:id/homepage",
    "title": "Get a course homepage",
    "name": "GetCourseHomepage",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses/XYZ/homepage",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the course (code).</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>The homepage content.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:id/students",
    "title": "Get all the students subscribed to a course",
    "name": "GetCourseStudents",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses/XYZ/students",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the course (code).</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>An array of users (students).</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:id/documents/:path",
    "title": "Get the list of documents in a directory",
    "name": "GetCourseTree",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses/XYZ/tree/folder1/folder2/doc",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "path": [
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the course (code).</p> "
          },
          {
            "group": "path",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "path",
            "defaultValue": "/",
            "description": "<p>The documents path.</p> "
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "hidden",
            "defaultValue": "false",
            "description": "<p>True to see hidden files.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>An object with the parent directory and the files.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          },
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "404",
            "description": "<p>Course not found.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses",
    "title": "Get all courses",
    "name": "GetCourses",
    "group": "Courses",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost/courses",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "all users."
      }
    ],
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "select",
            "description": "<p>Names of fields to select.</p> "
          },
          {
            "group": "query",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "codename",
            "description": "<p>Get by code or name of the course (OR condition).</p> "
          },
          {
            "group": "query",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "code",
            "description": "<p>Get by code of the course.</p> "
          },
          {
            "group": "query",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Get by name of the course.</p> "
          },
          {
            "group": "query",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>Get by tags of the course.</p> "
          },
          {
            "group": "query",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "pagination",
            "defaultValue": "true",
            "description": "<p>Enable / disable the pagination.</p> "
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The user's private token.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "200",
            "description": "<p>An object with metadata and array of results if pagination is true or an array of results if pagination is false.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "400",
            "description": "<p>Validation error.</p> "
          }
        ]
      }
    },
    "filename": "app/controllers/course.js",
    "groupTitle": "Courses"
  }
] });