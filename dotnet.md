# New webapi 
dotnet new webapi
# New grpc
dotnet new grpc

# EF core
## Add migration
dotnet ef --startup-project \<project-folder\> migrations add \<migration-name\> --context \<dbcontext-name\>

## Apply migrate
dotnet ef database update

## Export script
dotnet ef migrations script
