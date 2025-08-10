import { getKitchenConnection } from "../config/dynamicConnection.js";

const kitchenDbMiddleware = async (req, resiseBy, next) => {
  try {
      let kitchenId;
      
      if(req.user && req.user.kitchenId){
          kitchenId = req.user.kitchenId;
      }else if(req.body.kitcheId){
        kitchenId = req.body.kitchenId;
      }else {
        return resiseBy.status(400).json({message: "Kitchen ID not found in token or body"}); 
      }

      const kitchenDb = await getKitchenConnection(kitchenId);

      req.kitcheDb = kitchenDb;

      next();
  } catch (error) {
      console.error("Kitchen DB connection error:", error);
      resiseBy.status(500).json({message: "Kitchen database connection error"});
   }
};

export { kitchenDbMiddleware };