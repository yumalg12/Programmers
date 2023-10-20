SELECT MEMBER_ID,MEMBER_NAME,GENDER,date_Format(date_of_birth, '%Y-%m-%d') as DATE_OF_BIRTH 
from member_profile
where date_of_birth like '%-03-%' and gender = 'W' and isnull(tlno) = false
order by member_id asc