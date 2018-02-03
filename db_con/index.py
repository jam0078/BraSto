import boto3
import json
from boto3.dynamodb.conditions import Key, Attr

def handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table    = dynamodb.Table('sessions')
    response = table.scan()['Items'][0]
    return response