const express = require('express');
const router = express.Router();
const salesDeliveryController = require('../../controllers/sales/salesDeliveryController');

// Generate delivery number
router.post('/generate-delivery-number', salesDeliveryController.generateDeliveryNumber);

// CRUD operations
router.post('/sales-deliveries', salesDeliveryController.createSalesDelivery);
router.get('/sales-deliveries', salesDeliveryController.getAllSalesDeliveries);
router.get('/sales-deliveries/:id', salesDeliveryController.getSalesDeliveryById);
router.put('/sales-deliveries/:id', salesDeliveryController.updateSalesDelivery);
router.delete('/sales-deliveries/:id', salesDeliveryController.deleteSalesDelivery);

// Special operations
router.get('/sales-deliveries/by-order/:salesOrderId', salesDeliveryController.getDeliveriesBySalesOrder);
router.patch('/sales-deliveries/:id/status', salesDeliveryController.updateDeliveryStatus);
router.get('/delivery-statistics', salesDeliveryController.getDeliveryStatistics);

module.exports = router;