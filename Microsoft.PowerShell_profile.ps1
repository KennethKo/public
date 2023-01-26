
# posh config
try {
    oh-my-posh init pwsh | Invoke-Expression
} catch { } # squelch errors from multiple runs in same shell

# Kenneth Ko Powershell aliases file for windows
# first draft
# last updated 
# 20231225

# typical target:
# ~\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1


# via
set-alias vi vim
function via { vi $profile; & $profile }
# NOTE - source only picks up new functions. It doesn't seem to overwrite old ones

function pbcopy {
    [CmdletBinding()] param(
        [Parameter(ValueFromPipeline)]
	$text
    )
    Process { $text | clip; $text }
}
set-alias pbpaste Get-Clipboard

function pba { cat $profile | clip }

# convenience methods
function td { Get-Date -Format "yyyymmdd" | pbcopy }
function tt { Get-Date -Format "yyyymmdd HH  MM" | pbcopy }

set-alias ll dir
function l { Get-ChildItem $args -Exclude .*  | Format-Wide Name -AutoSize }

set-alias grep select-string

function pbjson { pbpaste | jq }

function gf { git fetch origin master }
function gm { gf; git merge master }

