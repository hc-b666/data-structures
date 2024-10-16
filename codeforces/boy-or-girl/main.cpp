#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  string str;
  cin >> str;

  unordered_set<char> s(str.begin(), str.end());

  if (s.size() % 2 == 0) cout << "CHAT WITH HER!\n";
  else cout << "IGNORE HIM!\n";
  
  return 0;
}
