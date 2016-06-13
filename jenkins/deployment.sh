cp -r app/* /repo/nodejsapp
ansible-playbook -i ansible/hosts ansible/appservers.yml  --private-key=/keys/id_rsa -u root
