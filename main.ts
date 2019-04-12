import * as tf from '@tensorflow/tfjs-node';

const MODEL_URL = 'file://./tmp/converted_my_model/model.json';

async function main() {
    const model = await tf.loadGraphModel(MODEL_URL)
    const x: tf.Tensor2D = tf.tensor([[1, 2]])
    const y = await model.predict(x)
    console.log(y.toString())
}

main()