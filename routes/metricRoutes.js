const { Router } = require('express');

const recordMetricValues = require('../controllers/recordMetricValues');
const getAveragesMedian = require('../controllers/getAveragesMedian');
const clearAverages = require('../controllers/clearAverages');

const router = Router();

router.route('/:metric').post(recordMetricValues).delete(clearAverages);
router.get('/:metric/median', getAveragesMedian);

module.exports = router;
