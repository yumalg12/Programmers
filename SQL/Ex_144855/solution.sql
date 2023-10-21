SELECT b.category, sum(s.sales) total_sales from book_sales as s
join book as b on b.book_id = s.book_id
where s.sales_date between '2022-01-01' and '2022-01-31'
group by b.category
order by b.category