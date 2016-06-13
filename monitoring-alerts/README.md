# Monitoring alerts

A simple way to monitor a system by reading any of its page and sending the results to a monitor API.

A script as `alert_template.py` could be deployed with ansible when creating either a load-balancer server or a appserver. This script would run with a cronjob in each machine.
