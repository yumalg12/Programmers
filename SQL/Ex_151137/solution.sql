SELECT CAR_TYPE, count(*) CARS from CAR_RENTAL_COMPANY_CAR
where options like '%가죽%' or options like '%통풍%' or options like '%열선%'
group by car_type
order by car_type asc