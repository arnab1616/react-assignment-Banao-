import React from 'react'

export default function HeroSection() {
    const obj = [
        {
            id:1,
            type:'✍️ Article',
            img:'/assets/Rectangle 5.png',
            note:'What if famous brands had regular fonts? Meet RegulaBrands!',
            bio:'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            name:'Sarthak Kamra',
            profil_pic:'https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jsmG-ZoUnlON3A3ZbCB54sPIcnH~vyiGeh1IOmgUJhP6TxommJ4NxovduM-KmaE~v8YgV-2i-tMsx-pWcaOEGV-o2JkwSw~YW4JVsdiK65gPyGdICoP4KbhzKHMF8U60NVYgOV7r3TY8FQAieJRHysAAuOxBE3HMY40SfuBU21b95zbiQtXRtF1kg4~lvaeE5oaPyEfP6Nk7D3d90N2pbBN6rPTcl7xF4CjHTN8lNGwaY~YwLVfCgQdbyITZiXyzj2Fph3Sfsyj3n4JZlyZrB~29krPtfO6bYQWCWT2jbj5T9bIlHdME-cHh7zs3SnX~P4Ipd~gCd39-6Ndg5Pf2ag__'
        },
        {
            id:2,
            type:'🔬️ Education',
            img:'/assets/Rectangle 5 (1).png',
            note:'Tax Benefits for Investment under National Pension Scheme launched by Government',
            bio:'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            name:'Sarah West',
            profil_pic:'https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cFw73mS-ylxPTeVEGgs7LXt6w7c5hskUKKPdPO7bN8FlwVRPvJ7hfsErw29eMZWcN42awd89PM05nSKETw9WWGtfMt-6I-Nho~SgrOhlFKArCM1r-b3ZxsHaalFSBevAzjKz4t1taYtY4DCZ1M9yHpboWrSgB7JeDg8d-USHyEkTi9sO2VqTXSxsOPUY0ULjG~KNZDfVahXVtRpoXX0iQ8Bl8-Q7DGtvpRxVuYbCBWlXK2bkD16y45bwCXhOU6dNvgNBBS0V-cSAYU8pIl~hi0Fosh-qxhcVtAZhPvTYIEsac4jwu~ulFOG8NzHzJWMLVbDaWBxYu9QGRoSzo-NzNQ__'
        },
        {
            id:3,
            type:'🗓️ Meetup',
            img:'/assets/Rectangle 5 (2).png',
            note:'Finance & Investment Elite Social Mixer @Lujiazui',
            bio:'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            name:'Ronal Jones',
            profil_pic:"https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cdTiifG6krVdTB9~DOM~cdE4poKGxg7Y70apDK9-qsw1jZxmD0uFSH6Xm0lE1w~LL-N41QTnjPMNFxvYLa4KMdh7jBOXgMS-ebG2oQL5uOvjxyOxWgLcCp7d1NurGxx66T8WL6IzW4-1KqDzZMaFRcN8WVyUejay7boZ8Thqqbx2X4P2pPi1Qimhr34pRdqnj9lAHI59xRpWHBRcwyGaJrJ77NZHp92Fb5xouerxR3QSHnOF2vnDMYPk4LuDvpp7HuOptPJGCvZ6AHy3ytGZ7qCcPQh9-KstRDst9NG8p7q9Yf3f6ZzvLTXJ5srpRYpPOEcrbth2eyvL~QxPR1vmJQ__"
        }
    ]
  return (
    <div className='main-wrapper'>
      <div className='x' style={{backgroundImage:`url('https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q6useyj0ig1wVxM~s0jDCaeWKiEaOval7f-0wn7oX2H8s-uFrypb9kN2kyJIYHMMLriW0va2MG~CXgaWkQICZxx8uLynys1yLvJOQUbgp8VJocLeW8sgtXQe0w~SnB-JWyCDA~nlmVKAq4i7JtiV73O1SjMwedPpWhaGYYqaTnC0pOzm1nKfR6b2z~KiA236lpCjLTvUmW6VrKdGLaC3C4KYmY9HESak~varsI142PxvdjWhTgn2JzfkYR6Otspwel3rCzcIN3UWBDKPOkTX5h2lC0t7oELKiuQwpQ8V8-eIXOx6uByku2ollt~wqxm2BxfQ6qNK-Uf-FU7cDeqn4w__')`}}>
        <div className='mobile-hero container-fluid'>
            <i className='bi bi-arrow-left fs-5' style={{color:'white'}}></i>
            <button className='btn btn-outline-light border-2 btn-sm' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Join Group
            </button>
        </div>
        <div className='hero-text' >
            <h1 style={{color:'white', textShadow:"1px 1px grey", width:'fit-content'}}>Computer Engineering</h1>
            <p style={{color:'white',textShadow:"1px 1px grey", width:'fit-content'}}>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <div className='container desktop-navigation'>
        <div className=''>
            <ul className='navbar-nav d-flex flex-row justify-content-between w-100'>
                <li className='nav-item me-4 active'>
                    <a className='nav-link' href="">All Posts(32)</a>
                </li>
                <li className='nav-item me-4'>
                    <a className='nav-link' href="">
                        Articles
                    </a>
                </li>
                <li className='nav-item me-4'>
                    <a className='nav-link' href="">
                        Event
                    </a>
                </li>
                <li className='nav-item me-4'>
                    <a className='nav-link' href="">
                        Education
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="">
                        Job
                    </a>
                </li>
            </ul>
        </div>
        <div className='d-flex align-items-center'>
            <button style={{background:'lightgrey'}} className='btn d-flex align-items-center  dropdown-toggle me-3'>Write a Post </button>
            <button className='btn btn-primary d-flex align-items-center'>
                <svg className='me-1' fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-480-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Z"/></svg>
                Join Group
            </button>
        </div>
      </div>
      <div className='mobile-navigation container' >
            <b>All Post(32)</b>
            <div>
                <button className='btn dropdown-toggle' style={{background:'lightgrey'}}>
                    Filter : All
                </button>
            </div>
        </div>
      <div className='d-flex container-xl p-0 mt-4'>
        <div className=''>
            <div>
                {obj.map((elm)=>{
                    return(
                        <div className='card mb-5'>
                            <img className='card-img-top' src={elm.img} alt="" />
                            <div className='card-body'>
                                <div className='mb-3'>
                                    <b>{elm.type}</b>
                                </div>
                                <div className='d-flex align-items-center justify-content-between dropdown'>
                                    <b className='fs-5'>{elm.note}</b>
                                    <i class="bi bi-three-dots fs-5 m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Edit</a></li>
                                        <li><a className="dropdown-item" href="#">Report</a></li>
                                        <li><a className="dropdown-item" href="#">Option 3</a></li>
                                    </ul>
                                </div>
                                {elm.id === 3?
                                <div>
                                    <div className='d-flex align-items-center mt-2'>
                                        <p className='m-0 me-5' style={{fontSize:'0.86rem'}}><i className="bi bi-calendar-event"></i> Fri, 12 Oct, 2018</p>
                                        <p className='m-0' style={{fontSize:'0.86rem'}}><i className="bi bi-geo-alt"></i>  Ahmedabad, India</p>
                                    </div>
                                    <button className='btn btn-light my-3' style={{color:'red', width:"100%", border:'1px solid lightgrey'}}>Visit Website</button>
                                </div>
                                :<p style={{color:'grey'}}>{elm.bio}</p>}
                                <div className='d-flex justify-content-between mt-4'>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <img className='me-2' src={elm.profil_pic} alt="" width='50px' height='50px' style={{borderRadius:"50%"}}/>
                                        <b className='m-0'>{elm.name}</b>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p className='m-0 me-5'><i className='bi bi-eye'></i>1.5k views</p>
                                        <button className='btn py-1 px-2 rounded-0'  style={{background:'lightgrey'}}> <i className='bi bi-share'></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className='card mb-5' >
                    <div className='card-body'>
                        <div className='mb-3'>
                                <b>💼️ Job</b>
                                </div>
                                <div className='d-flex align-items-center justify-content-between dropdown'>
                                    <b className='fs-5'>Software Developer</b>
                                    <i class="bi bi-three-dots fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Edit</a></li>
                                        <li><a className="dropdown-item" href="#">Report</a></li>
                                        <li><a className="dropdown-item" href="#">Option 3</a></li>
                                    </ul>
                                </div> 
                                <div>
                                    <div className='d-flex align-items-center mt-2'>
                                        <b className='m-0 me-5' style={{fontSize:'0.86rem'}}><i class="me-1 bi bi-briefcase"></i> Innovaccer Analytics Private Ltd.</b>
                                        <b className='m-0' style={{fontSize:'0.86rem'}}><i className="bi bi-geo-alt"></i>  Noida, India</b>
                                    </div>
                                    <button className='btn btn-light my-3' style={{color:'green', width:"100%", border:'1px solid lightgrey'}}>Apply on Timesjobs</button>
                                </div>                               
                                <div className='d-flex justify-content-between mt-4'>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <img className='me-2' src='https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YbZ93A9-eshgmSUrNJwA8v32ksKNMoZZKv~gXqYcYWI5ucJrjf3lM0lh9HNQ8VVUP9gMVi5futGAkLJ6i0JgJPzaPOlURRKmBco3WPtn~yQyvdtGBMciJ0Na3V8uPd9Vz6S9xvIPeHwzX2ewitpR3kA2jfUwZOiKO5poUTKkCzyD9q8fFiZ8KZBY2J5dsVqGGx0Hk7NFIbtxx7q7mAUYY18FWotGv52Mrf24k7HXu06tedSXFgNvgj0wzdY2VMXXqOfhLmbsmo-gXUSnSYlKZqOMYj0bIXldh0K7mhazyFoc9f7Q04dU4VkJnKihEpuoB2HR~8LU3FieQNHZpKFyRQ__' alt="" width='50px' height='50px' style={{borderRadius:"50%"}}/>
                                        <b className='m-0'>Joseph Gray</b>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p className='m-0 me-5'><i className='bi bi-eye'></i>1.5k views</p>
                                        <button className='btn py-1 px-2 rounded-0'  style={{background:'lightgrey'}}> <i className='bi bi-share'></i></button>
                                    </div>
                                </div>               
                            </div>
                </div>
            </div>
        </div>
        <div className='mt-3 location'>
            <div className='d-flex justify-content-between py-2' style={{borderBottom:'2px solid lightgrey'}}>
                <b className='m-0'><i className="bi bi-geo-alt"></i>  Noida, India</b>
                <i class="bi bi-pencil-fill"></i>
            </div>
            <div className='d-flex mt-3'>
                <i class="bi bi-exclamation-circle me-2"></i>
                <p style={{color:'grey', fontSize:"0.8rem"}}>Your location will help us serve better and extend a personalised experience.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
