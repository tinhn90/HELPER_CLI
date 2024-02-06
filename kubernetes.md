#Apply new config
## go to config folder
>cd /root/service/qa
 
### delete old pod

>kubectl delete -f notification.yaml -n nexthcm-uat
### edit yaml file
nano ....
cat ....

### deploy new pod
  
>kubectl apply -f notification.yaml -n nexthcm-uat
