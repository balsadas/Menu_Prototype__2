<div class="hiddenLang justify-center items-center popup-image">
    <div class="flex flex-col  w-auto h-auto bg-[#fff] px-6 py-6 z-50 rounded-[4px]">
        
        <div  class="w-full text-right -mt-3 -mr-4 ">
            <span onclick="document.querySelector('.hiddenLang').style.display = 'none';" 
            class="text-[20px] slg:text-[22px] text-[#800080]">&times;</span>
        </div>
        <p class="text-[#800080] text-center text-[20px] font-[400px] -tracking-[0.02em] mb-[8px]">{{ trans('main.choose_lang') }}</p>
        <div class="flex flex-col gap-[8px] text-[20px] font-[400px] -tracking-[0.02em]">
            @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                <a style="border: 1px solid rgba(255, 255, 255, 0.4);" hreflang="{{ $localeCode }}" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}" 
                class="TLWstyle bg-[#800080] hover:bg-[#4e134e] text-white text-[16px] ssm:text-[18px]">
                    {{ $properties["native"] }}
                </a>
            @endforeach  
        </div>  

    </div>
</div>