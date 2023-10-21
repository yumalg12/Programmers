SELECT date_format(datetime, '%H') hour, count(*) count from animal_outs group by `hour` having `hour` >= 9 and `hour` < 20 order by `hour`;
