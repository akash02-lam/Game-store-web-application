from django.shortcuts import render
from customerid.models import Login

def forum(request):
    return render(request,'Forum.html')

def login(request):
    try:
        if request.method == "POST":
            customername = request.POST.get('name')
            customeremail = request.POST.get('email')
            mpassword = request.POST.get('password')

            login = Login(
                name = customername,
                email = customeremail,
                password = mpassword

            )
            login.save()
    except:
        pass
    return render(request,'login.html')

def news(request):
    return render(request,'news.html')

def project(request):
    return render(request,'project.html')

def support(request):
    return render(request,'support.html')