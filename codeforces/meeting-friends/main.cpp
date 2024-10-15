#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  vector<int> frs(3);
  cin>>frs[0]>>frs[1]>>frs[2];
  sort(frs.begin(),frs.end());
  cout<<(frs[2]-frs[1])+(frs[1]-frs[0]) <<"\n";
  return 0;
}
