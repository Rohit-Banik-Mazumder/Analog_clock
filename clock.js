setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hr=30*htime+mtime/2;
    mr=6*mtime;
    ms=6*stime;
    hours.style.transform=`rotate(${hr}deg)`;
    min.style.transform=`rotate(${mr}deg)`;
    sec.style.transform=`rotate(${ms}deg)`;

}, 1000);
