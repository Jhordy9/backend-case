import { Router } from 'express';
import { AuthController } from './modules/auth/controller.js';
import { DocumentController, DocumentAdminController } from './modules/document/controller.js';
import { ensureAuth } from './modules/auth/middlewares/ensureAuth.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' assert { type: 'json' };

const router = Router();

router.use('/auth', AuthController);
router.use('/documents', ensureAuth.Authenticated, DocumentController);
router.use('/documents', ensureAuth.Admin, DocumentAdminController);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;
