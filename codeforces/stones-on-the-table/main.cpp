#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n;
  string str;
  cin >> n >> str;

  int r = 0;

  for (int i = 1; i < n; i++) {
    if (str[i-1] == str[i]) r++;
  }

  cout << r << "\n";

  return 0;
}
