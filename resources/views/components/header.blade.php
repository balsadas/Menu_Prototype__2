<div class="flex flex-col justify-center items-center w-full h-auto box-border text-[#1C1C1C]" >
    <div class="flex flex-row justify-between items-center w-full px-5 text-[16px] ssm:text-[18px] smd:text-[20px] m-[6px] p-2 text-white normal-case">
        <a  href="{{ route('welcome') }}" >
            <div style="border: 1.4px solid #E4E4E4;" class="flex justify-center items-center rounded-[4px] w-[34px] h-[34px] ssm:w-[36px] ssm:h-[36px] smd:w-[40px] smd:h-[40px] sm:w-[42px] sm:h-[42px]">
                <svg width="10" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 7L7 1" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>                          
        </a>
        <p class="text-center text-[#1C1C1C] leading-4 w-[200px] flex-grow mr-[34px]" >{{ trans('main.categories') }}</p>           
    </div> 
</div>