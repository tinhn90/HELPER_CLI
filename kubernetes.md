# Apply new config
## go to config folder
>cd /root/service/qa
 
## delete old pod

>kubectl delete -f notification.yaml -n nexthcm-uat
## edit yaml file
nano ....
cat ....

### deploy new pod
  
>kubectl apply -f notification.yaml -n nexthcm-uat

### List all pods in plain-text output format.
kubectl get pods

### List all pods in plain-text output format and include additional information (such as node name).
kubectl get pods -o wide
### List all pods in namespace.
kubectl get pods -n \<namespace\>
### Get logs of pod in namespace.
kubectl logs -f \<pod-name\> -n \<namespace\>
### Get config maps
kubectl get configmaps - n nexthcm-qa
