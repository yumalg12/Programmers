SELECT i.flavor from icecream_info as i
join first_half as f on f.flavor = i.flavor
where f.total_order > 3000 AND i.ingredient_type = 'fruit_based'
order by f.total_order desc