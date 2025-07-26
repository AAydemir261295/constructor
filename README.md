javascript postgresql, <br>
над csrf не заморачивался, <br>
авторизация по почте не закончена <br>
не доделал полный перенос css в js


database auth <br>
<br>
<br>
CREATE TABLE public.cookie ( <br> 
    id bigint NOT NULL, <br>
    token character varying(255), <br>
    value jsonb <br>
); <br>
<br>
<br>
CREATE TABLE public.csrf ( <br>
    token character varying(100), <br>
    csrf character varying(100), <br>
    expiry bigint <br>
); <br>
<br>
<br>
database users <br>
<br>
<br>
CREATE TABLE public.users ( <br>
    id bigint NOT NULL, <br>
    email character varying(100) NOT NULL, <br>
    data jsonb <br>
); <br>




