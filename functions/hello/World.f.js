import * as functions from 'firebase-functions'

export default functions.region("europe-west3").https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
  });
 