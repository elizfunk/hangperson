# Improved Performance

At Priceline, replacing our slowest tests with react-testing-library yielded noticeable cycle time improvements:

In CI/CD
Before refactors, for release builds, peak monthly average was 294s per build
The next month, we averaged 148s on unit tests per per build.
Runtime was cut in half!

Local development - unit tests run in git hook
Before: 150s
After: 55-60s
66% improvement!
