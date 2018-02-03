import boto3
import json
from boto3.dynamodb.conditions import Key, Attr
from decimal import Decimal

def decimal_default_proc(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError

def handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table    = dynamodb.Table('sessions')
    response = table.scan()['Items'][0]
    return response