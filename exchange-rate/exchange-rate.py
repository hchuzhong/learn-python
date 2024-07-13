import requests
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import schedule
import time
import os
from dotenv import load_dotenv
load_dotenv()

# 汇率 API（你需要找到一个可以获取汇率数据的 API）
EXCHANGE_RATE_API_URL = "https://api.exchangerate-api.com/v4/latest/HKD"
ALERT_THRESHOLD = 0.92
EMAIL_SENDER = os.getenv('EMAIL_SENDER')
EMAIL_PASSWORD = os.getenv('EMAIL_PASSWORD')
EMAIL_RECEIVER = os.getenv('EMAIL_RECEIVER')

def get_exchange_rate():
    response = requests.get(EXCHANGE_RATE_API_URL)
    data = response.json()
    return data['rates']['CNY']

def send_email(subject, body):
    msg = MIMEMultipart()
    msg['From'] = EMAIL_SENDER
    msg['To'] = EMAIL_RECEIVER
    msg['Subject'] = subject

    msg.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP('smtp.qq.com', 587)  # 这里需要使用你自己的 SMTP 服务器和端口
    server.starttls()
    server.login(EMAIL_SENDER, EMAIL_PASSWORD)
    text = msg.as_string()
    server.sendmail(EMAIL_SENDER, EMAIL_RECEIVER, text)
    server.quit()

def job():
    rate = get_exchange_rate()
    print(f"当前汇率: {rate}")
    subject = "每日汇率通知"
    body = f"当前人民币对港币的汇率是: {rate}"
    send_email(subject, body)
    if rate < ALERT_THRESHOLD:
        alert_subject = "汇率低于阈值通知"
        alert_body = f"注意！当前人民币对港币的汇率是: {rate}，低于设定的阈值 {ALERT_THRESHOLD}"
        send_email(alert_subject, alert_body)

# 每天早上 9 点运行
schedule.every().day.at("09:00").do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
