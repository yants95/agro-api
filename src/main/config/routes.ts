import express, { Router, json } from 'express'
import cors from 'cors'

import { UserController, CalculationController, TagCalculationController} from '@/controllers'

export const app = express()
const router = Router()
const userController = new UserController()
const calculationController = new CalculationController()
const tagCalculationController = new TagCalculationController()

app.use(cors())
app.use(json())

router.post('/users', async (req, res) => userController.create(req, res))
router.get('/users', async (req, res) => userController.get(req, res))
router.get('/users/:id', async (req, res) => userController.getById(req, res))
router.delete('/users/:id', async (req, res) => userController.delete(req, res))
router.patch('/users/:id', async (req, res) => userController.update(req, res))

router.post('/calculations', async (req, res) => calculationController.create(req, res))
router.get('/calculations', async (req, res) => calculationController.get(req, res))
router.get('/calculations/:id', async (req, res) => calculationController.getById(req, res))
router.delete('/calculations/:id', async (req, res) => calculationController.delete(req, res))
router.patch('/calculations/:id', async (req, res) => calculationController.update(req, res))

router.post('/tag-calculations', async (req, res) => tagCalculationController.create(req, res))
router.get('/tag-calculations/:id', async (req, res) => tagCalculationController.getById(req, res))
router.get('/tag-calculations', async (req, res) => tagCalculationController.get(req, res))
router.delete('/tag-calculations/:id', async (req, res) => tagCalculationController.delete(req, res))
router.patch('/tag-calculations/:id', async (req, res) => tagCalculationController.update(req, res))

app.use(router)
