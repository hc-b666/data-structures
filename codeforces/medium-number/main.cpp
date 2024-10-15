#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n;
  cin >> n;

  while (n--) {
    int a, b, c;
    cin >> a >> b >> c;
    
    if ((a>b && a<c) || (a>c && a<b)) cout << a << "\n";
    else if ((b>a && b<c) || (b>c && b<a)) cout << b << "\n";
    else cout << c << "\n";
  }
  
  return 0;
}
