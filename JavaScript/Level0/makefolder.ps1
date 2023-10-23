$num = 181952

while ($num -ge 181829) {
    New-Item -ItemType Directory -Name Ex_$num
    $num--
}
