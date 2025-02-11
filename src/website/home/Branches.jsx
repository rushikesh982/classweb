import React from "react";
import './Branches.css'

const data =[
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    },
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    },
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    },
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    },
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    },
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    },
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    },
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    },
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    },
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    },
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    },
    {
        'name':'BIBVEWADI(H.O.) ',
        'address':'634/1, Above People’s Bank, Bharat Jyoti Bus Stop Bibvewadi, Pune - 411 037. ',
        'mob':'12343666980',
        'map':'find us on google map'
    }
]


export default function Branches()
{
    return(
        <>  <div className="cardOuter text-center mb-5">
            {
                data.map((item)=>{
                    return(
                        <div id="card" className="p-5">
                        <h5 className="fw-bold">{item.name}</h5>
                        <p>{item.address}</p>
                        <p><i class="ri-phone-line"></i>{item.mob}</p>
                        <p>{item.map}</p>
                    </div>
                    )
                })  
            }
            </div>
        </>
    )        
}





  