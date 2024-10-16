#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  string str;
  cin >> str;

  ll r = 1, cr = 1;

  for (int i = 1; i < str.length(); i++) {
    if (str[i] == str[i - 1]) cr++;
    else {
      r = max(r, cr);
      cr = 1;
    }
  }

  r = max(r, cr);
  
  cout << r << "\n";

  return 0;
}
