<!DOCTYPE html>
<html lang="en">
<head>
    @include('includes.head')
</head>
<body class="flex justify-center m-0 p-0 box-border scrollbar-hide bg-[#FFFFFF]">
    <div class=" flex flex-col  h-[100%]">
        <div class="w-[100vw] h-[100%]">
            @yield('content')
        </div>        
    </div>
</body>
</html>

