import {
  create,
  deleteById,
  getAll,
  getOneById,
  updateById,
} from "../controllers/user.controller";
import { Router } from "express";

const router: Router = Router();

router.get("/", getAll);

/**
 * @openapi
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Entrega un JSON con un array de usuarios registrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                     type: object
 *                     properties:
 *                        _id:
 *                          type: ObjectId
 *                          example: 6427ded490525a0ea02332b4
 *                        email: 
 *                          type: string
 *                          example: pepito_23@gmail.com
 *                        passwordHash: 
 *                          type: string
 *                          example: 64s27r3y49a525a0fa02332b4
 *                        displayName: 
 *                          type: string
 *                          example: pepito
 *                        firstName: 
 *                          type: string
 *                          example: Jose
 *                        lastName: 
 *                          type: string
 *                          example: Lopez
 *                        isPremium: 
 *                          type: boolean
 *                          example: true
 *                        createdAt:
 *                          type: Date
 *                          example: 2023-04-01T07:35:48.398Z
 *                        updatedAt:
 *                          type: Date
 *                          example: 2023-04-01T07:35:48.398Z
 * 
 */

router.get("/:id", getOneById);

/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: ObjectId
 *         description: Id del usuario registrado
 *     responses:
 *       200:
 *         description: Entrega un usuario registrado con el Id utilizado como parámetro.
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                     type: object
 *                     properties:
 *                        _id:
 *                          type: ObjectId
 *                          example: 6427ded490525a0ea02332b4
 *                        email: 
 *                          type: string
 *                          example: pepito_23@gmail.com
 *                        passwordHash: 
 *                          type: string
 *                          example: 64s27r3y49a525a0fa02332b4
 *                        displayName: 
 *                          type: string
 *                          example: pepito
 *                        firstName: 
 *                          type: string
 *                          example: Jose
 *                        lastName: 
 *                          type: string
 *                          example: Lopez
 *                        isPremium: 
 *                          type: boolean
 *                          example: true
 *                        createdAt:
 *                          type: Date
 *                          example: 2023-04-01T07:35:48.398Z
 *                        updatedAt:
 *                          type: Date
 *                          example: 2023-04-01T07:35:48.398Z
 */

router.post("/", create);

//TODO: CONTINUAR CON REQUEST BODY, AUN NO SE COMO SE HACE

/**
 * @openapi
 * /api/users/:
 *   post:
 *     tags:
 *       - Users
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/Users'
 *            example:
 *              email: pepito@gmail.com
 *              passwordHash: "123456"
 *              displayName: Pepe2023
 *              firstName: José
 *              lastName: Alvarez
 *              isPremium: true
 *     description: payload 
 *     required: true
 *     responses:
 *       201:
 *         description: User created.
 *         
 */

router.put("/:id", updateById);
router.delete("/:id", deleteById);

export { router as usersRouter };