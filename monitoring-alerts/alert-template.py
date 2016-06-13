import urllib3

## Function: send_mail
#  Description: send output to mail
def send_alert(server):
    url = "http://{{ monitor-server }}/alerts/critical?server=%s" % (server)
    http = urllib3.PoolManager()
    with http.request('GET', url, preload_content=False) as response:
        pass

## Function: get_status
#  Description: get status of app
def get_status(server):
    url = "http://%s:3000/health" % (server)
    http = urllib3.PoolManager()
    html = ''
    with http.request('GET', url, preload_content=False) as response:
        html = response.read()

    print(html)
    if('good' in html):
        return True
    else:
        return False


if(__name__ == '__main__'):
    try:
        server = "{{ server }}"
        if(not get_status(server)):
            send_alert()
    except:
        sys.exit(2)
