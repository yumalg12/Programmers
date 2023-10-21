SELECT i.INGREDIENT_TYPE,sum(f.total_order) TOTAL_ORDER from icecream_info as i
join first_half as f
on f.flavor = i.flavor
group by i.ingredient_type
order by TOTAL_ORDER asc