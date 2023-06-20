import express from 'express'
import {authUser, deleteUser, getUsers, registerUser, getUserProfile, updateUserProfile} from '../controllers/userController.js'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'


router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser)

export default router