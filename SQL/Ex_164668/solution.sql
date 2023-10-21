SELECT u.USER_ID,u.NICKNAME,sum(b.price) as TOTAL_SALES
from USED_GOODS_BOARD as b
join USED_GOODS_USER as u
on u.user_id = b.writer_id
where b.status = 'DONE'
group by b.writer_id
having total_sales >= 700000
order by total_sales asc