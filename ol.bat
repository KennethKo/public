@echo off

:: 20250304 0932
:: Quick and dirty batch script to pipe web text into my windows ollama.
:: Must have lynx installed in your wsl (or install native lynx properly w some kind of native windows sed to trim the header and references)

setlocal EnableDelayedExpansion
set model=%OLLAMA_DEFAULT_MODEL%
IF NOT DEFINED model SET model=deepseek-r1:1.5b

IF [%1]==[] (
    echo "Running repl on %model%"
    ollama run %model%
) ELSE (
    set p=%2
    if not [%p%]==[] set p="Please summarize this text"
    echo "Using %model% to prompt !p! on %1"
    wsl lynx -dump %1^| sed -n "/^\w/,/^References$/p" | ollama run %model% !p!
)

endlocal
