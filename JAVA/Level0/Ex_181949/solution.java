import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();

        StringBuilder aStr = new StringBuilder();
        
        for (Character i : a.toCharArray()) {
            if (Character.isUpperCase(i)) {
                aStr.append(Character.toLowerCase(i));
            } else {
                aStr.append(Character.toUpperCase(i));
            }
        }
        
        System.out.print(aStr.toString());
    }
}
