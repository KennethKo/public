
# posh config
try {
    oh-my-posh init pwsh | Invoke-Expression
} catch { } # squelch errors from multiple runs in same shell

# Kenneth Ko Powershell aliases file for windows
# first draft
# last updated 
# 20231225
#
# typical target:
# ~\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1

# via
set-alias vi vim
function via { vi $profile; & $profile }
# NOTE - source only picks up new functions. It doesn't seem to overwrite old ones

function pba { cat $profile | Set-Clipboard }

# bash behavior
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete

function pbcopy {
    [CmdletBinding()] param(
        [Parameter(ValueFromPipeline)]
	$text
    )
    Process { $text | Set-Clipboard; $text }
}
set-alias pbpaste Get-Clipboard

set-alias ll dir
function l { Get-ChildItem $args -Exclude .*  | Format-Wide Name -AutoSize }

set-alias grep select-string

function which { (gcm $args).Path }

# NOTE - to edit registry from an admin console: 
# New-ItemProperty -Path "" -Name "" -PropertyType DWord -Value "00000001";
# Set-ItemProperty -Path "" -Name "" -Value "00000001";
# ./taskkill /f /im explorer.exe; ./CMD /Q /C START /REALTIME explorer.exe;
#
# Registry preferences
#  HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced LastActiveClick


# convenience methods
function td { Get-Date -Format "yyyyMMdd" | pbcopy }
function tt { Get-Date -Format "yyyyMMdd HHmm" | pbcopy }


function pbjson { pbpaste | ConvertFrom-Json | ConvertTo-Json -Depth 10 }

function gf { git fetch origin master }
function gg { gf; git merge master }
function gs { git switch -c $args remotes/origin/$args }

