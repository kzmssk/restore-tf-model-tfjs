#!/bin/sh

mkdir tmp

pipenv run tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_format=tfjs_graph_model \
    --signature_name=serving_default \
    --saved_model_tags=serve \
    ../save-tf-model/tmp/my_model \
    ./tmp/converted_my_model
