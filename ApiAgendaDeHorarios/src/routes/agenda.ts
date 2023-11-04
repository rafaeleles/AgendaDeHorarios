import { Router } from 'express';
import { deleteAgenda, getAgenda, getAgendas, postAgenda, updateAgenda } from '../controllers/agenda';

const router = Router();

router.get('/', getAgendas);
router.get('/:id', getAgenda);
router.delete('/:id', deleteAgenda);
router.post('/', postAgenda);
router.put('/:id', updateAgenda);

export default router;