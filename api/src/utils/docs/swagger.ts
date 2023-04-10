import { Application, Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Verbify",
      description: "Verbify API",
      version: "1.0.0",
    },
  },
  servers: [
    {
      url: "http://localhost:8080/api",
    },
  ],
  apis: ["./src/routes/user.routes.ts"],
  tags: [
    {
      name: "courses",
      description: "Everything about Courses"
    },
    {
      name: "modules",
      description: "Eveything about Modules"
    },
    {
      name: "classes",
      description: "Eveything about Classes"
    },
    {
      name: "users",
      description: "Operations about user"
    }
  ],
  components: {
    schemas: {
      Courses: {
        type: "object",
        properties: {
          id: {
            type: "string",
            format: "objectId",
            example: "6427c38d08b86ce760a1fa47"
          },
          name: {
            type: "string",
            example: "Inglés básico"
          },
          description: {
            type: "string",
            example: "Curso de inglés para estudiantes principiantes"
          },
          imageURL: {
            type: "string",
            example: "cover.png"
          },
          level: {
            type: "string",
            example: "beginner"
          },
          isPublic: {
            type: "boolean",
            example: true
          },
          tags: {
            type: "string"
          },
          modules: {
            type: "array",
            xml: {
              name: "modules",
              wrapped: true
            },
            items: {
              $ref: "#/components/schemas/Modules"
            }
          },
          isComplete: {
            type: "boolean",
            example: false
          }
        },
        xml: {
          name: "course"
        }
      },
      Modules: {
        type: "object",
        properties: {
          id: {
            type: "string",
            format: "objectId",
            example: "6427c38d08b86ce760a1fa47"
          },
          name: {
            type: "string",
            example: "Introduction"
          },
          isCompleted: {
            type: "boolean"
          },
          classes: {
            type: "array",
            xml: {
              name: "classes",
              wrapped: true
            },
            items: {
              $ref: "#/components/schemas/Classes"
            }
          }
        },
        xml: {
          name: "module"
        }
      },
      Classes: {
        type: "object",
        properties: {
          id: {
            type: "string",
            format: "objectId",
            example: "6427c38d08b86ce760a1fa47"
          },
          name: {
            type: "string",
            example: "Verb To Be"
          },
          content: {
            type: "string",
            example: "Clase del verbo to be, explicado y con parte practica"
          },
          videoURL: {
            type: "string",
            example: "https://www.youtube.com/watch?v=a6o5tq9pV5I"
          },
          isCompleted: {
            type: "boolean",
            example: false
          }
        },
        xml: {
          name: "classes"
        }
      },
      Users: {
        type: "object",
        properties: {
          id: {
            type: "string",
            format: "objectId",
            example: "6427c38d08b86ce760a1fa47"
          },
          displayName: {
            type: "string",
            example: "theUser_99"
          },
          firstName: {
            type: "string",
            example: "John"
          },
          lastName: {
            type: "string",
            example: "Doe"
          },
          email: {
            type: "string",
            example: "john@email.com"
          },
          passwordHash: {
            type: "string",
            example: "12345"
          },
          isPremium: {
            type: "boolean",
            example: true
          },
          roles: {
            type: "array",
            xml: {
              name: "roles",
              wrapped: false
            },
            items: {
              $ref: "#/components/schemas/Roles"
            }
          }
        },
        xml: {
          name: "users"
        }
      },
      Roles: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "admin"
          }
        },
        xml: {
          name: "roles"
        }
      }
    },
    requestBodies: {
      UserArray: {
        description: "List of user object",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Users"
              }
            }
          }
        }
      }
    },
    securitySchemes: {
      api_key: {
        type: "apiKey",
        name: "api_key",
        in: "header"
      }
    }
  }

};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app: Application, port: string|number) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
    console.log(
      `Docs are available at http://localhost:${port}/api/docs`
    );
  });
};

export { swaggerDocs };
